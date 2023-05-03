class Api::PostsController < ApplicationController

# i can filer the posts here by neighborhood

  def index
    @posts = Post.all.includes(:likes) # this optimizes for the n2 query in the views file
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

  def like
    @like = Like.new(liker_id: current_user.id, likeable_id: params[:id], likeable_type: :Post)
    if @like.save
      render :like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def unlike
    @like = Like.find_by(liker_id: current_user.id, likeable_id: params[:id], likeable_type: :Post)
    if @like.destroy
      render :like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end


  private

  def post_params
    params.require(:post).permit(:body, :author_id, :neighborhood_id, :longitude, :latitude)
  end


end
