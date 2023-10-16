<script setup lang="ts">
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
</script>

<template>


        <Card class="border-0 shadow-lg">

            <CardContent class="flex flex-col sm:flex-row sm:items-end gap-4 py-4">


                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="email">Type of Work</Label>
                    <Select>
                        <SelectTrigger class="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select type of work</SelectLabel>
                                <SelectItem value="apple">
                                    Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                    Banana
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>


                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="email">Academic Level</Label>
                    <Select class="w-full">
                        <SelectTrigger class="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Academic Level</SelectLabel>
                                <SelectItem value="apple">
                                    Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                    Banana
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>

                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="email">Pages Wors </Label>
                    <Select class="w-full">
                        <SelectTrigger class="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Academic Level</SelectLabel>
                                <SelectItem value="apple">
                                    Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                    Banana
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>

                <div class="grid w-full max-w-sm items-center gap-1.5">
                    <Label for="email">Urgency</Label>
                    <Select class="w-full">
                        <SelectTrigger class="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Select Urgency</SelectLabel>
                                <SelectItem value="apple">
                                    Apple
                                </SelectItem>
                                <SelectItem value="banana">
                                    Banana
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                </div>

                <div>
                    <UiButton class=" w-36">Order Now</UiButton>
                </div>
            </CardContent>
        </Card>

</template>