# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# rails db:seed:replant - replants the database if you want to update it

require 'faker'
require "open-uri"

ApplicationRecord.transaction do
  # Unnecessary if using `rails db:seed:replant`
  puts "Destroying tables..."
  User.destroy_all
  Neighborhood.destroy_all
  Post.destroy_all

  # After seeding, the first `User` has `id` of 1
  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('neighborhoods')
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('posts')

  puts "Creating Neighborhoods..."

    Neighborhood.create!(
      name: "Mission District"
    )

    Neighborhood.create!(
      name: "Marina District"
    )

    Neighborhood.create!(
      name: "Pacific Heights"
    )

  puts "Creating users..."

  # Create two users for demos and testing

    User.create!(
      email: "test@test.com",
      first_name: "test",
      last_name: "test",
      bio: "I'm a test user",
      neighborhood_id: 1,
      password: "123456"
    )

    User.create!(
      email: "demouser@gmail.com",
      first_name: "Demo",
      last_name: "User",
      bio: "I'm a demo user",
      neighborhood_id: 2,
      password: "123456"
    )


    10.times do
      first_name = Faker::Name.first_name
      last_name = Faker::Name.last_name
      email = Faker::Internet.safe_email("#{first_name}.#{last_name}")
      bio = Faker::Quote.famous_last_words
      neighborhood_id = Faker::Number.between(from: 1, to: 3)
      password = Faker::Internet.password(min_length: 6, max_length: 20)

      User.create!(
        email: email,
        first_name: first_name,
        last_name: last_name,
        bio: bio,
        neighborhood_id: neighborhood_id,
        password: password
      )
    end


    puts "Creating posts..."

  # Create two posts for testing

    # Post.create!(
    #   body: "I am a test post",
    #   author_id: 1,
    #   neighborhood_id: 1,
    # )

    # Post.create!(
    #   body: "I am a demo post",
    #   author_id: 2,
    #   neighborhood_id: 2,
    # )

  # More users for production seeding

  # Faker::Lorem.paragraphs(number: rand(3..10)).join("\n") - this will make groups of paragraphs and join them together

  12.times do
    body = Faker::Books::Dune.quote
    author_id = Faker::Number.between(from: 1, to: 12)
    neighborhood_id = Faker::Number.between(from: 1, to: 3)
    latitude = Faker::Address.latitude.to_f.round(6)
    longitude = Faker::Address.longitude.to_f.round(6)

    Post.create!(
      body: body,
      author_id: author_id,
      neighborhood_id: neighborhood_id,
      latitude: latitude,
      longitude: longitude
    )
  end

end

puts "Attaching seed photos"

Post.first(10).each_with_index do |post, index|
  post.photo.attach(
    # The string passed to URI.open should be the URL of the image in its bucket.
    io: URI.open("https://neighborhoodnode-seed.s3.us-west-1.amazonaws.com/img#{index + 1}.jpg"),
    filename: "img#{index + 1}.jpg"
  )
end

puts "Done!"
