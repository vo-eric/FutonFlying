class RemoveUniquenessFromCity < ActiveRecord::Migration[5.0]
  def change
    remove_index :users, :city_id
    add_index :users, :city_id
  end
end
