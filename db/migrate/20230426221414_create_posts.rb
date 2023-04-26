class CreatePosts < ActiveRecord::Migration[7.0]
  def change
    create_table :posts do |t|
      t.text :body, null: false
      t.references :author, null: false, foreign_key: { to_table: :users}
      t.references :neighborhood, null: false, foreign_key: { to_table: :neighborhoods}
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
