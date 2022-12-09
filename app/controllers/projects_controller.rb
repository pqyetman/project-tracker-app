class ProjectsController < ApplicationController

  skip_before_action :authorize, only: [:index, :show]   

  def index
    projects = Project.all
    render json: projects
  end

  def show
    project = Project.find(params[:id])
    render json: project
  end 

  def create        
    project = Project.create!(project_params)
    render json: project, status: :created       
  end 

  def update
    project = Project.find(params[:id])       
    project.update!(update_params)
    render json: project, status: :ok    
  end 

  def destroy    
    project = Project.find(params[:id])
    project.destroy
    head :no_content
  end 

  private

  def project_params
    params.permit(:open, :description, :customer_id, :estimated_total_hours)
  end   

  def update_params
    params.permit(:open)
  end  

end
