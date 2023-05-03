json.extract! @comment, :id, :body, :author_id, :post_id
json.user_photo url_for(@comment.author.photo) if @comment.author.photo.present?
