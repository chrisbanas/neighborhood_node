@posts.each do |post|
  json.set! post.id do
      json.extract! post, :id, :body, :author_id, :neighborhood_id, :longitude, :latitude
  end
end
