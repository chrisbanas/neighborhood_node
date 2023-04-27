# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# rails db:seed:replant - replants the database if you want to update it

require 'faker'

ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  User.destroy_all
  Neighborhood.destroy_all
  Post.destroy_all

  puts "Resetting primary keys..."
  # After seeding, the first `User` has `id` of 1
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


  # More users for production seeding
    100.times do
      User.create!({
        email: Faker::Internet.unique.email,
        first_name: Faker::Name.unique.first_name,
        last_name: Faker::Name.unique.last_name,
        bio: Faker::Lorem.unique.sentence,
        neighborhood_id: rand(1..3),
        password: 'password'
      })
    end


    puts "Creating posts..."

  # Create two posts for testing

    Post.create!(
      body: "I am a test post",
      author_id: 1,
      neighborhood_id: 1,
    )

    Post.create!(
      body: "I am a demo post",
      author_id: 2,
      neighborhood_id: 2,
    )

  # More users for production seeding

  # Faker::Lorem.paragraphs(number: rand(3..10)).join("\n") - this will make groups of paragraphs and join them together

    100.times do
      Post.create!({
        neighborhood_id: rand(1..3),
        author_id: rand(1..102),
        body: Faker::Lorem.unique.paragraphs,
      })
    end


  puts "Done!"

end
