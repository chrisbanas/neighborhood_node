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

  # Validations
  validates :body, presence: true

  # Active Record Associations
  belongs_to :author,
  foreign_key: :author_id,
  class_name: :User,
  inverse_of: :posts

  belongs_to :neighborhood,
  foreign_key: :neighborhood_id,
  class_name: :Neighborhood,
  inverse_of: :posts

  has_many :comments,
  inverse_of: :post,
  dependent: :destroy

  # Polymorphic
  has_many :likes,
  as: :likeable,
  dependent: :destroy

  # AWS S3
  has_many_attached :photo


end
