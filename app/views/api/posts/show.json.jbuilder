json.set! @post.id do
  json.extract! @post, :id, :body, :author_id, :neighborhood_id, :longitude, :latitude, :created_at, :updated_at
  json.photo_urls @post.photo.map {|photo| url_for(photo)}
  json.user_photo url_for(@post.author.photo) if @post.author.photo.present?
  json.author_first_name @post.author.first_name
  json.author_last_name @post.author.last_name
  json.author_bio @post.author.bio
  json.neighborhood_name @post.neighborhood.name
  json.num_like @post.likes.length
  json.num_comments @post.comments.length
  json.comments do
    @post.comments.each do |comment|
      json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :post_id, :parent_comment_id, :latitude, :longitude, :created_at, :updated_at
        json.author_first_name comment.author.first_name
        json.author_last_name comment.author.last_name
        json.author_bio comment.author.bio
        json.neighborhood_id comment.author.neighborhood_id
        json.neighborhood_name comment.author.neighborhood.name
        json.num_like comment.likes.length
        json.photo_urls comment.photo.map {|photo| url_for(photo)}
        json.user_photo url_for(comment.author.photo) if comment.author.photo.present?
      end
    end
  end
end
