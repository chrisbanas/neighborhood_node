# == Schema Information
#
# Table name: neighborhoods
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Neighborhood < ApplicationRecord

  validates :name, presence: true

  has_many :users,
  foreign_key: :user_id,
  class_name: :User,
  inverse_of: :neighborhood

  has_many :posts,
  foreign_key: :neighborhood_id,
  class_name: :Post,
  inverse_of: :neighborhood
  # dependent: :destroy - do I need this?

end
