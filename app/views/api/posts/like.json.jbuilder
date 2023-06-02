# This is what the like & unlike function use in the posts controller
json.extract! @like, :id, :liker_id, :likeable_type, :likeable_id, :created_at, :updated_at
