@likes.each do |like|
  json.set! like.id do
      json.extract! like, :id, :post_id, :author_id
  end
end
