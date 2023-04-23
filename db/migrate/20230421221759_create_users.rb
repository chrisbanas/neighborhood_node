class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :email, null: false, index: { unique: true }
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.text :bio
      t.string :session_token, null: false, index: { unique: true }
      t.string :password_digest, null: false
      t.references :neighborhood, null: false, foreign_key: { to_table: :neighborhoods}
      t.datetime :last_login, null: false
      t.timestamps
    end
  end
end
