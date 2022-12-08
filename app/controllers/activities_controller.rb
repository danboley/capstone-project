class ActivitiesController < ApplicationController
  def index
    render json: Activity.all.order(date: :desc), status: :ok
  end

  def show
    render json: find_act, status: :ok
  end

  def create
    @current_user.activities.create!(act_params)
    render json: @current_user.activities, status: :created
  end

  def update
    render json: find_act.update!(act_params), status: :accepted
  end

  def destroy
    find_act.destroy
    head :no_content
  end

  private

  def find_act
    Activity.find(params[:id])
  end

  def act_params
    params.permit(:title, :date, :time, :distance, :duration, :sport, :elevation, :description, :location,:image, :user_id)
    # add map functionality below
    # params.permit(:map, :title, :date, :time, :distance, :duration, :sport, :elevation, :description, :location, :user_id)
  end

end
