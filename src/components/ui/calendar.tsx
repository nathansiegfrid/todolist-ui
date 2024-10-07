import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import * as React from "react"
import { DayPicker, DropdownProps } from "react-day-picker"

import { buttonVariants } from "~/components/ui/button"
import { ScrollArea } from "~/components/ui/scroll-area"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"
import { cn } from "~/lib/utils"

export type CalendarProps = React.ComponentProps<typeof DayPicker>

const Calendar = ({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) => (
  <DayPicker
    showOutsideDays={showOutsideDays}
    className={cn("p-3", className)}
    classNames={{
      months: "flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0",
      month: "space-y-4",
      caption: "relative flex items-center justify-center pt-1",
      caption_label: cn(
        "text-sm font-medium",
        props.captionLayout !== "buttons" && "hidden",
      ),
      caption_dropdowns: "flex items-center",
      nav: "flex items-center space-x-1",
      nav_button: cn(
        buttonVariants({ variant: "outline" }),
        "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100",
      ),
      nav_button_previous: "absolute left-1",
      nav_button_next: "absolute right-1",
      table: "w-full border-collapse space-y-1",
      head_row: "flex",
      head_cell:
        "w-8 rounded-md text-[0.8rem] font-normal text-muted-foreground",
      row: "mt-2 flex w-full",
      cell: cn(
        "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
        props.mode === "range" ?
          "[&:has(>.day-range-end)]:rounded-r-md [&:has(>.day-range-start)]:rounded-l-md first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md"
        : "[&:has([aria-selected])]:rounded-md",
      ),
      day: cn(
        buttonVariants({ variant: "ghost" }),
        "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
      ),
      day_range_start: "day-range-start",
      day_range_end: "day-range-end",
      day_selected:
        "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground",
      day_today: "bg-accent text-accent-foreground",
      day_outside:
        "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
      day_disabled: "text-muted-foreground opacity-50",
      day_range_middle:
        "aria-selected:bg-accent aria-selected:text-accent-foreground",
      day_hidden: "invisible",
      ...classNames,
    }}
    components={{
      IconLeft: () => <ChevronLeftIcon className="h-4 w-4" />,
      IconRight: () => <ChevronRightIcon className="h-4 w-4" />,
      Dropdown: ({ name, value, onChange, children }: DropdownProps) => {
        const options = React.Children.toArray(children) as React.ReactElement<
          React.HTMLProps<HTMLOptionElement>
        >[]
        const selected = options.find((child) => child.props.value === value)
        const handleChange = (value: string) => {
          const changeEvent = {
            target: { value },
          } as React.ChangeEvent<HTMLSelectElement>
          onChange?.(changeEvent)
        }
        return (
          <Select value={value?.toString()} onValueChange={handleChange}>
            <SelectTrigger
              className={cn(
                "mx-0.5 h-7 pl-2 pr-1",
                name === "months" && "w-20",
                name === "years" && "w-16",
              )}
            >
              <SelectValue>{selected?.props?.children}</SelectValue>
            </SelectTrigger>
            <SelectContent position="popper" className="min-w-0">
              <ScrollArea className="h-80">
                {options.map((option, id: number) => (
                  <SelectItem
                    key={`${option.props.value}-${id}`}
                    value={option.props.value?.toString() ?? ""}
                  >
                    {option.props.children}
                  </SelectItem>
                ))}
              </ScrollArea>
            </SelectContent>
          </Select>
        )
      },
    }}
    {...props}
  />
)
Calendar.displayName = "Calendar"

export { Calendar }
