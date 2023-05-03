# add another json.likes
json.comments do
  @comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :post_id, :parent_comment_id, :latitude, :longitude, :created_at, :updated_at
        json.photo_urls comment.photo.map {|photo| url_for(photo)}
        json.user_photo url_for(comment.author.photo) if comment.author.photo.present?
        json.author_first_name comment.author.first_name
        json.author_last_name comment.author.last_name
        json.author_bio comment.author.bio
        json.neighborhood_id comment.author.neighborhood_id
        json.neighborhood_name comment.author.neighborhood.name
        json.numlike comment.likes.length
    end
  end
end
