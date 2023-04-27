json.user do
    json.extract! @user, :id, :email, :first_name, :last_name, :bio, :neighborhood_id, :created_at, :updated_at
end
