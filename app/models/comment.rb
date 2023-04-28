# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  body              :text             not null
#  author_id         :bigint           not null
#  post_id           :bigint           not null
#  parent_comment_id :bigint
#  latitude          :float
#  longitude         :float
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
  # Remember: Rails automatically validates the presence of `belongs_to` associations, so you can omit presence validations for `author`

  validates :body, presence: true

  belongs_to :author,
  class_name: :User,
  inverse_of: :comments

  belongs_to :post,
  class_name: :Post,
  inverse_of: :comments

  belongs_to :parent_comment,
  foreign_key: :parent_comment_id,
  class_name: :Comment,
  optional: true

  has_many :replies,
  foreign_key: :parent_comment_id,
  class_name: :Comment,
  dependent: :destroy

  has_one :parent_commenter,
  through: :parent_comment,
  source: :commenter

  # Polymorphic
  has_many :likes,
  as: :likeable,
  dependent: :destroy

  # AWS S3
  has_many_attached :photo

end
