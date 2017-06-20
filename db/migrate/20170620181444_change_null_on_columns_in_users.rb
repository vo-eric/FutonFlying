class ChangeNullOnColumnsInUsers < ActiveRecord::Migration[5.0]
  def change
    change_column_null :users, :fname, :null => false
    change_column_null :users, :lname, :null => false
  end
end
