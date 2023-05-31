# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# rails db:seed:replant - replants the database if you want to update it

# rails db:reset - to reset the database

require 'faker'
require "open-uri"

ApplicationRecord.transaction do
  # Unnecessary if using `rails db:seed:replant`
  puts "Destroying tables..."
  User.destroy_all
  Neighborhood.destroy_all
  Post.destroy_all
  Comment.destroy_all
  Like.destroy_all

  puts 'Destroying all ActiveStorage attachments...'
  ActiveStorage::Attachment.all.each { |attachment| attachment.purge }

  # After seeding, the first `data point` has `id` of 1
  puts "Resetting primary keys..."
  ApplicationRecord.connection.reset_pk_sequence!('neighborhoods')
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('posts')
  ApplicationRecord.connection.reset_pk_sequence!('comments')
  ApplicationRecord.connection.reset_pk_sequence!('likes')

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

  # Create a demo user for each neighborhood

    user1 = User.create!(
      email: "test@test.com",
      first_name: "Test",
      last_name: "Test",
      bio: "I'm a test user",
      neighborhood_id: 1,
      password: "123456"
    )

    user2 = User.create!(
      email: "demouser@gmail.com",
      first_name: "Demo",
      last_name: "User",
      bio: "I'm a demo user",
      neighborhood_id: 2,
      password: "123456"
    )

  # More users for production seeding - currently have 101 profile images

    10.times do
      first_name = Faker::Name.first_name
      last_name = Faker::Name.last_name
      email = Faker::Internet.email
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

# ----------------------------------------------------------------------------------

  puts "Creating posts..."

  # Create two posts for testing

    Post.create!(
      body: "I am a test post",
      author_id: 1,
      neighborhood_id: 1,
      latitude: 37.773972,    # San Francisco coordinates
      longitude: -122.431297
    )

    Post.create!(
      body: "I am a demo post",
      author_id: 2,
      neighborhood_id: 2,
    )

  # More posts for production seeding

  # Faker::Lorem.paragraphs(number: rand(3..10)).join("\n") - this will make groups of paragraphs and join them together



  # Posts without Geo Tag

  5.times do
    body = Faker::Books::Dune.quote
    author_id = Faker::Number.between(from: 1, to: 12)
    neighborhood_id = Faker::Number.between(from: 1, to: 3)

    Post.create!(
      body: body,
      author_id: author_id,
      neighborhood_id: neighborhood_id,
    )
  end


  # Posts with Geo Tag

  min_lat = 37.7
  max_lat = 37.85
  min_lng = -122.55
  max_lng = -122.35

  5.times do
    body = Faker::Books::Dune.quote
    author_id = Faker::Number.between(from: 1, to: 12)
    neighborhood_id = Faker::Number.between(from: 1, to: 3)
    latitude = rand(min_lat..max_lat).round(6)
    longitude = rand(min_lng..max_lng).round(6)

    Post.create!(
      body: body,
      author_id: author_id,
      neighborhood_id: neighborhood_id,
      latitude: latitude,
      longitude: longitude
    )
  end

# ----------------------------------------------------------------------------------

  puts "Creating comments..."

    comment1 = Comment.create!(
      body: "I am a test comment",
      author_id: 1,
      post_id: 1,
      latitude: 37.773972,    # San Francisco coordinates
      longitude: -122.431297
    )

    comment2 = Comment.create!(
      body: "I am a demo comment",
      author_id: 2,
      post_id: 2,
    )

  # nested comments

    comment3 = Comment.create!(
      body: "NESTED - I am a demo comment",
      author_id: 2,
      post_id: 2,
      parent_comment_id: 2,
      latitude: 38.773972,
      longitude: -124.431297
    )

  # More comments for production seeding

    12.times do
      body = Faker::Books::Dune.quote
      author_id = Faker::Number.between(from: 3, to: 12)
      post_id = Faker::Number.between(from: 3, to: 12)
      latitude = rand(min_lat..max_lat).round(6)
      longitude = rand(min_lng..max_lng).round(6)

      Comment.create!(
        body: body,
        author_id: author_id,
        post_id: post_id,
        latitude: latitude,
        longitude: longitude
      )
    end

# ----------------------------------------------------------------------------------

  puts "Creating likes..."

  # posts likes
  25.times do
    user = User.offset(rand(User.count)).limit(1).first # Returns a random user object
    post_id = Faker::Number.between(from: 3, to: 12)

    # Check if the user has already liked the post
    while Like.exists?(liker: user, likeable_id: post_id, likeable_type: 'Post')
      post_id = Faker::Number.between(from: 3, to: 12)
    end

    Like.create!(
      liker: user,
      likeable_id: post_id,
      likeable_type: 'Post'
    )
  end

  # comments likes
    Like.create!(
      liker: user1,
      likeable_id: comment1.id,
      likeable_type: :Comment
    )

    Like.create!(
      liker: user2,
      likeable_id: comment2.id,
      likeable_type: :Comment
    )

  # nested comments likes
    Like.create!(
      liker: user2,
      likeable_id: comment3.id,
      likeable_type: :Comment
    )

end

# ----------------------------------------------------------------------------------

puts "Attaching seed profile photos..."

User.first(12).each_with_index do |user, index|
  user.photo.attach(
    # The string passed to URI.open should be the URL of the image in its bucket.
    io: URI.open("https://neighborhoodnode-seed.s3.us-west-1.amazonaws.com/seed_profile_images/profile#{index + 1}.png"),
    filename: "profile#{index + 1}.png"
  )
end


puts "Attaching seed post photos..."

Post.first(10).each_with_index do |post, index|
  post.photo.attach(
    # The string passed to URI.open should be the URL of the image in its bucket.
    io: URI.open("https://neighborhoodnode-seed.s3.us-west-1.amazonaws.com/img#{index + 1}.jpg"),
    filename: "img#{index + 1}.jpg"
  )
end

puts "Done!"
