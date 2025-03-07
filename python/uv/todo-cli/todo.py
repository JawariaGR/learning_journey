import click # to create a cli
import json # to save and load taska from a file
import os # to check if the file exists

TODO_File = "todo.json"

def Load_tasks():
    if not os.path.exists(TODO_File):
        return []
    with open(TODO_File,"r") as file:
        return json.load(file)
    
def save_tasks(tasks):
    with open(TODO_File,"w") as file:
        json.dump(tasks,file,indent=4)


@click.group()
def cli():
    """Simple todo list manger"""
    pass



@click.command()
@click.argument("task")
def add(task):
    """Add a new task to the list """
    tasks = Load_tasks()
    tasks.append({"task":task,"done":False})
    save_tasks(tasks)
    click.echo(f"Task added:{task}") 


@click.command()
def list_tasks(): 
    """list all the task"""
    tasks = Load_tasks()
    if not tasks:
        click.echo("No tasks found.")   
        return
    for index,task in enumerate(tasks,1):
        status  = "✖" if  task ["done"] else "✔" 
        click.echo(f"{index}.{task['task']} [{status}]")


@click.command()
@click.argument("tasknumber",type= int)
def complete(tasknumber):
    """ mark a task as complete"""
    tasks = Load_tasks()
    if 0 < tasknumber <= len(tasks):
        tasks[tasknumber -1 ]["done"] = True
        save_tasks(tasks)
        click.echo(f"Task {tasknumber} marked as completed")
    else:
        click.echo("Invalied task number")

@click.command()
@click.argument("tasknumber",type = int)
def remove(tasknumber):
    """ Remove a task from then list"""
    tasks = Load_tasks()
    if 0 < tasknumber <=len(tasks):
        removed_task = tasks.pop(tasknumber - 1)
        save_tasks(tasks)
        click.echo(f"Removed task:{removed_task['task']}")
    else:
        click.echo("Invailed task number")
 
    
cli.add_command(add)
cli.add_command(list_tasks)
cli.add_command(complete)
cli.add_command(remove)

if __name__ == "__main__":
    cli()