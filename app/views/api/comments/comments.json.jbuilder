# add another json.likes



json.comments do
  @comments.each do |comment|
    json.set! comment.id do
        json.extract! comment, :id, :body, :author_id, :post_id
        json.authorName comment.author.name
        #json.numlike comment.likes.length
    end
  end
end
