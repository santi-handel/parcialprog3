import React, { useState, useEffect } from "react";
function App() {
	const [ingresos, setIngresos] = useState([]);
	const [formData, setFormData] = useState({
		fecha: "",
		hora: "",
		nombreYApellido: "",
		temperaturaSintoma: "",
		tosSintoma: "",
		insuficienciaRespiratoriaSintoma: "",
		dolorGargantaSintoma: "",
		perdidaOlfatoSintoma: "",
		perdidaGustoSintoma: "",
		otrosSintoma: "",
		contactoEnAislamiento: "",
		contactoViajero: "",
		viajes: "",
		observacion: "",
	});
	const [formEdit, setFormEdit] = useState({
		id: "",
		fecha: "",
		hora: "",
		nombreYApellido: "",
		temperaturaSintoma: "",
		tosSintoma: "",
		insuficienciaRespiratoriaSintoma: "",
		dolorGargantaSintoma: "",
		perdidaOlfatoSintoma: "",
		perdidaGustoSintoma: "",
		otrosSintoma: "",
		contactoEnAislamiento: "",
		contactoViajero: "",
		viajes: "",
		observacion: "",
	});

	useEffect(() => {
		loadIngresos();
	}, []);

	const loadIngresos = () => {
		fetch("http://localhost/Parcial/index.php")
			.then((response) => response.json())
			.then((data) => setIngresos(data))
			.catch((error) => console.log(error));
	};

	const handleInputChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};
	const handleEditChange = (event) => {
		setFormEdit({ ...formEdit, [event.target.name]: event.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		await fetch("http://localhost/Parcial/index.php", {
			method: "POST",
			body: JSON.stringify(formData),
		});
		await loadIngresos();
		event.target.reset();
	};

	const handleEdit = async (event) => {
		event.preventDefault();

		await fetch("http://localhost:/Parcial/index.php", {
			method: "PUT",
			body: JSON.stringify(formEdit),
		});

		await loadIngresos();
		event.target.reset();
	};

	return (
		<div>
			<h1>CRUD Frontend</h1>

			<h2>Añadir un ingreso</h2>
			<form onSubmit={handleSubmit}>
				{/* Campos del formulario */}
				<label htmlFor="fecha">Fecha:</label>
				<input
					type="date"
					id="fecha"
					name="fecha"
					value={formData.fecha}
					onChange={handleInputChange}
					required
				/>
				<br />
				<label htmlFor="hora"> Hora: </label>
				<input
					type="time"
					id="hora"
					name="hora"
					value={formData.hora}
					onChange={handleInputChange}
					required
				/>
				<br />
				<label htmlFor="nombreYApellido">Nombre y Apellido: </label>
				<input
					type="string"
					id="nombreYApellido"
					name="nombreYApellido"
					value={formData.nombreYApellido}
					onChange={handleInputChange}
					required
				/>
				<br />
				<label>
					Presenta Temperatura:
					<select
						defaultValue={"Default"}
						name="temperaturaSintoma"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Tos:
					<select
						defaultValue={"Default"}
						name="tosSintoma"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Insuficiencia Respiratoria:
					<select
						defaultValue={"Default"}
						name="insuficienciaRespiratoriaSintoma"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Dolor de Garganta:
					<select
						defaultValue={"Default"}
						name="dolorGargantaSintoma"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Perdida de Olfato:
					<select
						defaultValue={"Default"}
						name="perdidaOlfatoSintoma"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Perdida del Gusto:
					<select
						defaultValue={"Default"}
						name="perdidaGustoSintoma"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta otros Sintomas:
					<select
						defaultValue={"Default"}
						name="otrosSintoma"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Tuvo contacto en aislamiento:
					<select
						defaultValue={"Default"}
						name="contactoEnAislamiento"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Tuvo contacto en un viaje:
					<select
						defaultValue={"Default"}
						name="contactoViajero"
						onChange={handleInputChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label htmlFor="viajes">Viajes: </label>
				<input
					type="string"
					id="viajes"
					name="viajes"
					value={formData.viajes}
					onChange={handleInputChange}
					required
				/>
				<br />
				<label htmlFor="observacion">Oservacioes: </label>
				<input
					type="string"
					id="observacion"
					name="observacion"
					value={formData.observacion}
					onChange={handleInputChange}
					required
				/>
				<br />
				<button type="submit">Guardar</button>
			</form>

			<h2>Editar un ingreso</h2>
			<form onSubmit={handleEdit}>
				<label htmlFor="id">ID a editar :</label>
				<input
					id="id"
					name="id"
					value={formData.id}
					onChange={handleEditChange}
					required
				/>
				<br />
				<label htmlFor="fecha">Fecha:</label>
				<input
					type="date"
					id="fechaedit"
					name="fecha"
					value={formEdit.fecha}
					onChange={handleEditChange}
					required
				/>
				<br />
				<label htmlFor="hora"> Hora: </label>
				<input
					type="time"
					id="horaedit"
					name="hora"
					value={formEdit.hora}
					onChange={handleEditChange}
					required
				/>
				<br />
				<label htmlFor="nombreYApellido">Nombre y Apellido: </label>
				<input
					type="string"
					id="nombreYApellido"
					name="nombreYApellido"
					value={formEdit.nombreYApellido}
					onChange={handleEditChange}
					required
				/>
				<br />
				<label>
					Presenta Temperatura:
					<select
						defaultValue={"Default"}
						name="temperaturaSintoma"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Tos:
					<select
						defaultValue={"Default"}
						name="tosSintoma"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Insuficiencia Respiratoria:
					<select
						defaultValue={"Default"}
						name="insuficienciaRespiratoriaSintoma"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Dolor de Garganta:
					<select
						defaultValue={"Default"}
						name="dolorGargantaSintoma"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Perdida de Olfato:
					<select
						defaultValue={"Default"}
						name="perdidaOlfatoSintoma"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta Perdida del Gusto:
					<select
						defaultValue={"Default"}
						name="perdidaGustoSintoma"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Presenta otros Sintomas:
					<select
						defaultValue={"Default"}
						name="otrosSintoma"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Tuvo contacto en aislamiento:
					<select
						defaultValue={"Default"}
						name="contactoEnAislamiento"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label>
					Tuvo contacto en un viaje:
					<select
						defaultValue={"Default"}
						name="contactoViajero"
						onChange={handleEditChange}
					>
						<option value="Default">Seleccione una opcion </option>
						<option value="si">Si</option>
						<option value="-">-</option>
					</select>
				</label>
				<br />
				<label htmlFor="viajes">Viajes: </label>
				<input
					type="string"
					id="viajes"
					name="viajes"
					value={formEdit.viajes}
					onChange={handleEditChange}
					required
				/>
				<br />
				<label htmlFor="observacion">Oservacioes: </label>
				<input
					type="string"
					id="observacion"
					name="observacion"
					value={formEdit.observacion}
					onChange={handleEditChange}
					required
				/>
				<br />
				<button type="submit">Guardar</button>
			</form>

			<h2>Listado de ingresos</h2>
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Fecha</th>
						<th>Hora</th>
						<th>Nombre y Apellido</th>

						<th>Temperatura</th>
						<th>Tos</th>
						<th>Insuficiecia Respiratoria</th>
						<th>Dolor de garganta</th>
						<th>Perdida del olfato</th>
						<th>Perdida del gusto</th>
						<th>Otros</th>

						<th>Contacto en Aislamiento</th>
						<th>Contacto en viajes</th>
						<th>Viajes</th>
						<th>Observaciones</th>
					</tr>
				</thead>
				<tbody>
					{ingresos.map((ingreso) => (
						<tr key={ingreso.id}>
							<td>{ingreso.id}</td>
							<td>{ingreso.fecha}</td>
							<td>{ingreso.hora}</td>
							<td>{ingreso.nombreYApellido}</td>
							<th>{ingreso.temperaturaSintoma}</th>
							<th>{ingreso.tosSintoma}</th>
							<th>{ingreso.insuficienciaRespiratoriaSintoma}</th>
							<th>{ingreso.dolorGargantaSintoma}</th>
							<th>{ingreso.perdidaOlfatoSintoma}</th>
							<th>{ingreso.perdidaGustoSintoma}</th>
							<th>{ingreso.otrosSintoma}</th>
							<td>{ingreso.contactoEnAislamiento}</td>
							<td>{ingreso.contactoViajero}</td>
							<td>{ingreso.viajes}</td>
							<td>{ingreso.observacion}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default App;
