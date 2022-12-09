class EmployeesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  # GET /employees
  def index
    employees = Employee.all
    render json: employees
  end

  # GET /employees/1
  def show
    employee = Employee.find(params[:id])
    render json: employee
  end

  # POST /employees
  def create        
    employee = Employee.create!(employee_params)
    render json: employee, status: :created       
  end 

  def update
    employee = Employee.find(params[:id])       
    employee.update!(employee_params)
    render json: employee, status: :ok    
  end 

  # DELETE /employees/1
  def destroy
    @employee.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_employee
      @employee = Employee.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def employee_params
      params.require(:employee).permit(:name, :title)
    end
end
