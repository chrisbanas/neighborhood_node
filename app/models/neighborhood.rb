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
  class_name: :User

end
