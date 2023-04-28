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

  belongs_to :author, class_name: :User
  belongs_to :post, class_name: :Post

  # is this right?
  belongs_to :parent_comment, class_name: :Comment

  has_many :likes, as: :likeable, dependent: :destroy

end
