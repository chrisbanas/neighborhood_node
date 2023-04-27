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
require 'rails_helper'

RSpec.describe Post, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
