class ApplicationController < ActionController::API
  include ActionController::Cookies

  def hello_world
    session[:count] = (session[:count] || 0) + 1
    render json: { count: session[:count] }
  end

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

#   before_action :authorize

  private

  def render_not_found(error)
    render json: { error: "#{error.model} not found" }, status: :not_found
  end

  def render_unprocessable_entity(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end

#   def authorize
#     @current_user = User.find_by(id: session[:user_id])
#     render json: { errors: ['Not authorized'] }, status: :unauthorized unless @current_user
#   end
end
