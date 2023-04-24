json.user do
    json.extract! @user, :id, :email, :bio, :neighborhood_id, :created_at, :updated_at
end
