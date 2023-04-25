# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  first_name      :string           not null
#  last_name       :string           not null
#  bio             :text
#  session_token   :string           not null
#  password_digest :string           not null
#  neighborhood_id :bigint           not null
#  last_login      :datetime         not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
FactoryBot.define do
  factory :user do
    
  end
end
