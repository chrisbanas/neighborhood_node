# == Schema Information
#
# Table name: likes
#
#  id            :bigint           not null, primary key
#  liker_id      :bigint           not null
#  likeable_type :string           not null
#  likeable_id   :bigint           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

# *************THIS TABLE IS POLYMORPHIC***************

class Like < ApplicationRecord
  
  # Remember: Rails automatically validates the presence of `belongs_to` associations, so you can omit the presence validations for `likeable` and `liker`.
  validates :liker_id,
  uniqueness: { scope: %i[likeable_id likeable_type] }

  # You don't need `inverse_of` on `liker` because `liker` is not used as a `source` in any `through` association.
  belongs_to :liker,
  class_name: :User

  # You would normally add an `inverse_of: :likes` to `likeable` so you could create, e.g., a liked comment through `User#liked_comments`. The polymorphic nature of `likeable`, however, will cause Rails 7.0.3 to throw an error in that case, so `inverse_of` has been left off. :)
  belongs_to :likeable,
  polymorphic: true

end
