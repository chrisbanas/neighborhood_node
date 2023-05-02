# add another json.likes
json.comments do
  @comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :neighborhood_id, :longitude, :latitude, :created_at, :updated_at
        json.photo_urls comment.photo.map {|photo| url_for(photo)}
        json.author_first_name comment.author.first_name
        json.author_last_name comment.author.last_name
        json.neighborhood_name comment.neighborhood.name
        json.numlike comment.likes.length
    end
  end
end
