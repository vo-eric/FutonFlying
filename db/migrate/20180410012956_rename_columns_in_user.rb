class RenameColumnsInUser < ActiveRecord::Migration[5.0]
  def change
    rename_column :users, :lat, :latitude
    rename_column :users, :lng, :longitude
  end
end
