class RemoveNullfromUsers < ActiveRecord::Migration[7.0]
  def change
    change_column_null :users, :last_login, true
  end
end
