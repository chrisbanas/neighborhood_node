class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all #.includes(:likes) # this optimizes for the n2 query in the views file
    render :index
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment&.save
      render json: @comment
    else
      render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def show
    @comment = Comment.find_by(id: params[:id])
    if @comment
      render :show
    else
      render json: {errors: @comment.errors.full_messages}, status: :unprocessable_entity
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment&.destroy
      head :no_content
    end
  end

  def like
    @like = Like.new(author_id: current_user.id, likeable_id: params[:id], likeable_type: :Comment)
    if @like.save
      render :like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def unlike
    @like = Like.find_by(author_id: current_user.id, likeable_id: params[:id], likeable_type: :Comment)
    if @like.destroy
      render :like
    else
      render json: like.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id, :parent_comment_id, :longitude, :latitude)
  end


end
