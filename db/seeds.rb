# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

# rails db:seed:replant - replants the database if you want to update it


ApplicationRecord.transaction do
  puts "Destroying tables..."
  # Unnecessary if using `rails db:seed:replant`
  Neighborhood.destroy_all
  User.destroy_all

  puts "Resetting primary keys..."
  # After seeding, the first `User` has `id` of 1
  ApplicationRecord.connection.reset_pk_sequence!('users')
  ApplicationRecord.connection.reset_pk_sequence!('neighborhoods')

  puts "Creating users..."

    User.create!(
      email: "test@test.com",
      first_name: "test",
      last_name: "test",
      bio: "I'm a test user",
      neighborhood_id: 1,
      password: "123456"
    )

    User.create!(
      email: "demouser@gmail.com.com",
      first_name: "Demo",
      last_name: "User",
      bio: "I'm a demo user",
      neighborhood_id: 2,
      password: "123456"
    )


  puts "Creating Neighborhoods..."

    Neighborhood.create(
      name: "Mission District"
    )

    Neighborhood.create(
      name: "Marina District"
    )

    Neighborhood.create(
      name: "Pacific Heights"
    )

  puts "Done!"

end
