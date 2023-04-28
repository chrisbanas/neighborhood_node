class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      # this needs to be set as false so that the add index below is the one that gets user
      t.references :liker, null: false, foreign_key: { to_table: :users }, index: false

      # points to both posts and comments. Creates a likeable type that will point to the model names comments and post and a likeable ID that will store the ID's associated with those models
      t.references :likeable, polymorphic: true, null: false
      t.timestamps
    end
    # this makes it so that a user can only like a post or comment once.
    add_index :likes, [:liker_id, :likeable_type, :likeable_id], unique: true
  end
end
