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
FactoryBot.define do
  factory :post do
    
  end
end
