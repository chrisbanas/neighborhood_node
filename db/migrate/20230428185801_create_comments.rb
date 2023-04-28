class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.text :body, null: false
      t.references :author, null: false, foreign_key: { to_table: :users}
      t.references :post, null: false, foreign_key: { to_table: :posts}
      t.references :parent_comment, foreign_key: { to_table: :comments }
      t.float :latitude
      t.float :longitude
      t.timestamps
    end
  end
end
