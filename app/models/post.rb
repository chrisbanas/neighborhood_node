# == Schema Information
#
# Table name: posts
#
#  id              :bigint           not null, primary key
#  body            :text             not null
#  author_id       :bigint           not null
#  neighborhood_id :bigint           not null
#  latitude        :float
#  longitude       :float
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class Post < ApplicationRecord

  validates :body, presence: true

  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User

  belongs_to :neighborhood,
  foreign_key: :neighborhood_id,
  class_name: :Neighborhood

  has_many_attached :photo

end
