class AddLatitudeAndLongitudeToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :address, :string
  end
end
