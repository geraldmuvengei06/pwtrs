<template>
    <div class="card shadow-xl">
        <div class="card-body  flex flex-column md:flex-row gap-3">
            <div class="form-control flex-1">
                <label class="label">
                    <span class="label-text">Type of paper</span>
                </label>
                <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
            </div>
            <div class="form-control flex-1">
                <label class="label">
                    <span class="label-text">Academic Level</span>
                </label>
                <select class="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>

            </div>
            <div class="form-control flex-1">
                <label class="label">
                    <span class="label-text">Urgency</span>
                </label>
                <select class="select select-bordered">
                    <option disabled selected>Pick one</option>
                    <option>Star Wars</option>
                    <option>Harry Potter</option>
                    <option>Lord of the Rings</option>
                    <option>Planet of the Apes</option>
                    <option>Star Trek</option>
                </select>

            </div>

            <div class="form-control flex-1">
                    <label class="label">
                        <span class="label-text">Pages/Words</span>
                    </label>
                    <select class="select select-bordered">
                        <option disabled selected>Pick one</option>
                        <option>Star Wars</option>
                        <option>Harry Potter</option>
                        <option>Lord of the Rings</option>
                        <option>Planet of the Apes</option>
                        <option>Star Trek</option>
                    </select>

                </div>
                <button class="sm:mt-9 btn btn-secondary  text-slate-50">Order Now</button>

        </div>
    </div>
</template>