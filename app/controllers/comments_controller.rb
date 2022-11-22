class CommentsController < ApplicationController
  def index
    render json: Comment.all, status: :ok
  end

  def show
    render json: find_comm, status: :ok
  end

  private

  def find_comm
    Comment.find(params[:id])
  end
end
