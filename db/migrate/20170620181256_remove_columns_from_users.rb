class RemoveColumnsFromUsers < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :city_id
  end
end
