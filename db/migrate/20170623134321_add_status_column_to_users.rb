class AddStatusColumnToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :status, :string, default: "Accepting Guests", null: false
  end
end
