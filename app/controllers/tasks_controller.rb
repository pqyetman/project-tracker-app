class TasksController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

  def index
      if params[:project_id]
          project = Project.find(params[:project_id])
          tasks = project.tasks
      else 
          tasks = Task.all
      end
      render json: tasks
  end

  def show
      task = Task.find_by(project_id: params[:id])
  end

  def create
      task = Task.create!(task_params)
      render json: task, status: :created
  end

  def destroy
      task = Task.find_by(id: params[:id])
      task.destroy
      head :no_content
  end

  private

  def task_params
    params.permit(:hours, :description, :employee_id, :project_id)
  end

end
