class Api::PostsController < ApplicationController


  # my index is filtering to show only posts for the neighborhood of the current user and then ordering them to show the newest first
  def index
    neighborhood_id = current_user.neighborhood_id
    @posts = Post.where(neighborhood_id: neighborhood_id).includes(:likes).order(created_at: :desc)
    render :index
  end

  def create
    @post = Post.new(post_params)
    if @post&.save
      render :show
    else
      render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    @post = Post.find_by(id: params[:id])
    if @post
      render :show
    else
      render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def update
    @post = Post.find_by(id: params[:id])
    if @post&.update(post_params)
      render :show
    elsif !@post
      render json: ['Post not found.'], status: 400
    else
      render json: {errors: @post.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    @post = Post.find_by(id: params[:id])
    if @post&.destroy
      head :no_content
    end
  end


  # do not say "render json: like" as that will cause a recursive loop.

  def like
    @like = Like.new(liker_id: current_user.id, likeable_id: params[:id], likeable_type: :Post)
    if @like.save
      render :like
    else
      render @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def unlike
    @like = Like.find_by(liker_id: current_user.id, likeable_id: params[:id], likeable_type: :Post)
    if @like.destroy
      render :like
    else
      render @like.errors.full_messages, status: :unprocessable_entity
    end
  end


  private

  def post_params
    params.require(:post).permit(:body, :author_id, :neighborhood_id, :longitude, :latitude)
  end


end
