class DropColumnFromComments < ActiveRecord::Migration[6.0]
  def change
    remove_column :comments, :user_id
  end
end
