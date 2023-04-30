@posts.each do |post|
  json.set! post.id do
      json.extract! post, :id, :body, :author_id, :neighborhood_id, :longitude, :latitude, :created_at, :updated_at
      json.photo_urls post.photo.map {|photo| url_for(photo)}
      json.author_first_name post.author.first_name
      json.author_last_name post.author.last_name
      json.neighborhood_name post.neighborhood.name
      json.num_like post.likes.length
      json.comments post.comments
  end
end
