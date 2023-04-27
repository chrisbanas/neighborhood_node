@posts.each do |post|
  json.set! post.id do
      json.extract! post, :id, :body, :author_id, :neighborhood_id, :longitude, :latitude
      json.photo_urls post.photo.map {|photo| url_for(photo)}
  end
end
