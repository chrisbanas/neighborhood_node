class Api::CommentsController < ApplicationController

  # my index is filtering to show only comments for the neighborhood of the current user

  def index
    @comments = Comment.joins(author: :neighborhood)
      .where(neighborhoods: { id: current_user.neighborhood_id })
      .includes(:likes)
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

  def update
    @comment = Comment.find_by(id: params[:id])
    if @comment&.update(comment_params)
      render :show
    elsif !@comment
      render json: ['Comment not found.'], status: 400
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
    @like = Like.new(liker_id: current_user.id, likeable_id: params[:id], likeable_type: :Comment)
    if @like.save
      render :like
    else
      render @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  def unlike
    @like = Like.find_by(liker_id: current_user.id, likeable_id: params[:id], likeable_type: :Comment)
    if @like.destroy
      render :like
    else
      render @like.errors.full_messages, status: :unprocessable_entity
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :author_id, :post_id, :parent_comment_id, :longitude, :latitude)
  end


end
