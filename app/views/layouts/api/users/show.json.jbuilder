json.user do
    json.extract! @user, :id, :email, :bio, :neighborhoodId, :profileImageUrl, :created_at, :updated_at
end
