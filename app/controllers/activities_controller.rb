class ActivitiesController < ApplicationController
  def index
    render json: Activity.all, status: :ok
  end

  def show
    render json: find_act, status: :ok
  end

  private

  def find_act
    Activity.find(params[:id])
  end

end
